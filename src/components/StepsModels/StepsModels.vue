<template>
    <div class="steps-container">
        <StepModelItem
                :title="`1 этап построения финансовой модели`"
                :caption="`Первая консультация, на которой мы определим основные запросы, проблемы, которые можно решить с помощью фин модели`"
                :src="require(`@/assets/meeting.png`)"
                :btn-text="`Второй этап`"
                :last:="false"
        />
        <StepModelItem
                :title="`2 этап построения финансовой модели`"
                :caption="`Построение фин модели, исходя из потребностей вашего бизнеса`"
                :src="require(`@/assets/fin-model.png`)"
                :btn-text="`Третий этап`"
                :revert="true"
                :last:="false"
        />
        <StepModelItem
                :title="`3 этап построения финансовой модели`"
                :caption="`Представление фин модели вашего бизнеса. Определение ключевых финансовых показателей. При необходимости фин модель дорабатывается до необходимого результата.`"
                :src="require(`@/assets/fin-model2.png`)"
                :btn-text="`Третий этап`"
                :last:="false"
        />
        <StepModelItem
                :title="`4 этап построения финансовой модели`"
                :caption="`Анализ данных фин модели. Определение драйверов роста развития бизнеса. Рекомендации.`"
                :src="require(`@/assets/businessman.png`)"
                :btn-text="`Третий этап`"
                :revert="true"
                :last:="true"
        />
    </div>
</template>

<script>
    import StepModelItem from "./StepModelItem";
    export default {
        components: {
            StepModelItem
        }
    }
</script>

<style>

</style>